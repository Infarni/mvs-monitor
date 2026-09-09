import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { chromium, Page, type Browser } from 'playwright';
import { IConfig } from '../../../dynamic-modules/config/interfaces/config.interface.js';
import { BASE_EQN_URL } from '../constants/urls.constant.js';
import {
  DOCUMENT_LOAD_INVERVAL_MS,
  ID_GOV_FINISH_AUTHORIZE_INVERVAL_MS,
  LOGIN_STEP_INTERVAL_MS,
} from '../constants/interval.constant.js';
import { sleep } from '../../../common/utils/sleep.util.js';
import {
  ID_GOV_CONTINUE_BUTTON_SELECTOR,
  ID_GOV_EDS_FILE_INPUT_SELECTOR,
  ID_GOV_EDS_FILE_PASSWORD_INPUT_SELECTOR,
  ID_GOV_POLICY_CHECKBOX_SELECTOR,
  ID_GOV_POLICY_CONTINUE_BUTTON_SELECTOR,
  ID_GOV_POLICY_CONTINUE_BUTTONS_SVG_SELECTOR,
  ID_GOV_PROVIDER_SELECTION_SELECTOR,
  ID_GOV_SIGN_BUTTON_SELECTOR,
} from '../constants/selectors.constant.js';
import {
  EQN_JOINING_TO_WAITING_LIST_BUTTON_TEXT,
  ID_GOV_AUTH_TYPE_OPTION_TEXT,
  ID_GOV_CONTINUE_BUTTON_TEXT,
} from '../constants/texts.constant.js';

@Injectable()
export class AuthService implements OnModuleInit, OnModuleDestroy {
  private browser?: Browser;
  private page?: Page;

  private readonly edsFilePath: string;
  private readonly edsPassword: string;
  private readonly edsProvider: string;

  constructor(configService: ConfigService<IConfig>) {
    this.edsFilePath = configService.getOrThrow('EDS_FILE_PATH');
    this.edsPassword = configService.getOrThrow('EDS_PASSWORD');
    this.edsProvider = configService.getOrThrow('EDS_PROVIDER');
  }

  async onModuleInit() {
    this.browser = await chromium.launch({ headless: false });

    const newPage = await this.browser.newPage();

    this.page = newPage;
  }

  async onModuleDestroy() {
    await this.browser?.close();
  }

  async authorize(): Promise<object[]> {
    await this.openStartAuthorizePage();

    await this.page?.waitForLoadState('domcontentloaded', {
      timeout: DOCUMENT_LOAD_INVERVAL_MS,
    });
    await sleep(LOGIN_STEP_INTERVAL_MS);

    await this.executeIdGovAuth();

    const cookies = (await this.browser?.contexts()[0].cookies()) as object[];

    await this.page?.goto('about:blank');

    await this.onModuleDestroy();

    await this.onModuleInit();

    return cookies;
  }

  private async openStartAuthorizePage(): Promise<void> {
    await this.page?.goto(BASE_EQN_URL, {
      waitUntil: 'domcontentloaded',
      timeout: DOCUMENT_LOAD_INVERVAL_MS,
    });
    await sleep(LOGIN_STEP_INTERVAL_MS);

    const checkbox = this.page?.locator(ID_GOV_POLICY_CHECKBOX_SELECTOR);
    await checkbox?.waitFor({
      state: 'visible',
      timeout: DOCUMENT_LOAD_INVERVAL_MS,
    });

    await checkbox?.check();
    await sleep(LOGIN_STEP_INTERVAL_MS);

    const continueButton = this.page
      ?.locator(ID_GOV_POLICY_CONTINUE_BUTTON_SELECTOR)
      .filter({
        has: this.page.locator(ID_GOV_POLICY_CONTINUE_BUTTONS_SVG_SELECTOR),
      })
      .first();
    await continueButton?.waitFor({
      state: 'visible',
      timeout: DOCUMENT_LOAD_INVERVAL_MS,
    });

    await continueButton?.click();
  }

  private async executeIdGovAuth(): Promise<void> {
    const fileStorageOption = this.page
      ?.getByText(ID_GOV_AUTH_TYPE_OPTION_TEXT, { exact: true })
      .first();
    await fileStorageOption?.waitFor({
      state: 'visible',
      timeout: DOCUMENT_LOAD_INVERVAL_MS,
    });
    await fileStorageOption?.click();
    await sleep(LOGIN_STEP_INTERVAL_MS);

    const providerSelection = this.page?.locator(
      ID_GOV_PROVIDER_SELECTION_SELECTOR,
    );
    await providerSelection?.waitFor({
      state: 'visible',
      timeout: DOCUMENT_LOAD_INVERVAL_MS,
    });
    await providerSelection?.selectOption({ label: this.edsProvider });
    await sleep(LOGIN_STEP_INTERVAL_MS);

    const edsFileInput = this.page?.locator(ID_GOV_EDS_FILE_INPUT_SELECTOR);
    await edsFileInput?.waitFor({
      state: 'attached',
      timeout: DOCUMENT_LOAD_INVERVAL_MS,
    });
    await edsFileInput?.setInputFiles(this.edsFilePath);
    await sleep(LOGIN_STEP_INTERVAL_MS);

    const edsFilePasswordInput = this.page?.locator(
      ID_GOV_EDS_FILE_PASSWORD_INPUT_SELECTOR,
    );
    await edsFilePasswordInput?.waitFor({
      state: 'visible',
      timeout: DOCUMENT_LOAD_INVERVAL_MS,
    });
    await edsFilePasswordInput?.fill(this.edsPassword);
    await sleep(LOGIN_STEP_INTERVAL_MS);

    const signButton = this.page?.locator(ID_GOV_SIGN_BUTTON_SELECTOR);
    await signButton?.waitFor({
      state: 'visible',
      timeout: DOCUMENT_LOAD_INVERVAL_MS,
    });
    await signButton?.click();
    await sleep(LOGIN_STEP_INTERVAL_MS);

    const continueButton = this.page
      ?.getByRole(ID_GOV_CONTINUE_BUTTON_SELECTOR, {
        name: ID_GOV_CONTINUE_BUTTON_TEXT,
        exact: true,
      })
      .first();
    await continueButton?.waitFor({
      state: 'visible',
      timeout: ID_GOV_FINISH_AUTHORIZE_INVERVAL_MS,
    });
    await continueButton?.click();
    await sleep(LOGIN_STEP_INTERVAL_MS);

    let joinToWaitingListButton = this.page?.getByRole('link', {
      name: EQN_JOINING_TO_WAITING_LIST_BUTTON_TEXT,
      exact: true,
    });
    await joinToWaitingListButton?.waitFor({
      state: 'visible',
      timeout: DOCUMENT_LOAD_INVERVAL_MS,
    });
    await sleep(LOGIN_STEP_INTERVAL_MS);
    joinToWaitingListButton = this.page?.getByRole('link', {
      name: EQN_JOINING_TO_WAITING_LIST_BUTTON_TEXT,
      exact: true,
    });
    await joinToWaitingListButton?.waitFor({
      state: 'visible',
      timeout: DOCUMENT_LOAD_INVERVAL_MS,
    });
  }
}
