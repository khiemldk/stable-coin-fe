import * as z from 'zod';

export const validationMessages = {
  required: (field?: string) => (field ? `${field} field is required` : 'This field is required'),
  number: (field?: string) => (field ? `${field} must be a number` : 'This field must be a number'),
  between: (min: number, max: number, field?: string) =>
    field
      ? `Sorry, your ${field.toLowerCase()} must be between ${min} and ${max} characters long`
      : `Sorry, this field must be between ${min} and ${max} characters long`,
  max: (max: number, field?: string) =>
    field
      ? `Sorry, your ${field.toLowerCase()} must be at most ${max} characters long`
      : `Sorry, this field must be at most ${max} characters long`,
  gt: (min: number, field?: string) =>
    field ? `${field} must be at least ${min} characters` : `This field must be at least ${min} characters`,
  gte: (min: number, field?: string) =>
    field ? `${field} must be greater than or equal to ${min}` : `This field must be greater than or equal to ${min}`,
  lt: (max: number, field?: string) =>
    field ? `${field} must be smaller than ${max}` : `This field must be smaller than ${max}`,
  lte: (max: number, field?: string) =>
    field ? `${field} must be smaller than or equal to ${max}` : `This field must be smaller than or equal ${max}`,
  specialCharacters: () =>
    "This field can only contain the following special characters: '-', '_', ' '. No other special characters are allowed",
  emoji: () => 'No other emoji characters are allowed',
  invalid: (field?: string) => (field ? `This is not a valid ${field}` : 'This is not a valid field'),
};

export const mintSchema = z.object({
  address: z.string().min(1, validationMessages.required('Address')),
  amount: z.string().min(1, validationMessages.required('Amount')),
});

export const burnSchema = z.object({
  amount: z.string().min(1, validationMessages.required('Amount')),
});

export const collectSchema = z.object({
  amount: z.string().min(1, validationMessages.required('Amount')),
});

export type MintSchema = z.infer<typeof mintSchema>;
export type BurnSchema = z.infer<typeof burnSchema>;
export type CollectSchema = z.infer<typeof collectSchema>;
