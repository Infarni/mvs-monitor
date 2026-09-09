import { IOption } from '../interfaces/option.interface.js';

export class OptionDto implements IOption {
  name: string;
  optionId?: number;
  options: IOption[];
}
