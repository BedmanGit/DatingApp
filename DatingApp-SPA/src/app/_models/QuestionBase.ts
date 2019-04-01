export class QuestionBase<T> {
    questionId: number;
    value: T;
    key: string;
    label: string;
    required: boolean;
    maxLength: number;
    order: number;
    controlType: string;
    validations: string;
    showIf: string;
    constructor(options: {
        questionId?: number;
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        maxLength?: number,
        order?: number,
        controlType?: string,
        validations?: string,
        showIf?: string
      } = {}) {
      this.questionId = options.questionId === undefined ? options.order : options.questionId;
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.maxLength = options.maxLength === undefined ? null : options.maxLength;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.validations = options.validations || '';
      this.showIf = options.showIf || '';
    }
}
