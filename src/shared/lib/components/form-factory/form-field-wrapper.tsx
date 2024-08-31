import { createContext, FC, ReactElement, ReactNode, useCallback, useId } from 'react';
import { Controller, ControllerFieldState, ControllerRenderProps, FieldError, FieldValues, Path, UseFormReturn, UseFormStateReturn } from 'react-hook-form';
import { ClassValue } from 'clsx';

import { cn } from '../../utils/cn';

interface FormFieldOverviewProps {
  label?: string;
  showError?: boolean;
  classNames?: {
    label?: ClassValue;
    labelText?: ClassValue;
  };
}

interface FormFieldContextProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<T>;
}

interface FormFieldWrapperProps<T extends FieldValues> extends FormFieldOverviewProps {
  form: UseFormReturn<T>;
  name: Path<T>;
  children: (props: FormFieldContextProps<T>, id: string) => ReactElement;
}

const FormFieldContext = createContext({});

const FormFieldError: FC<{ error: FieldError }> = ({ error }) => {
  return (
    <p className="text-rose-500">
      {error.message}
    </p>
  )
};

export const FormFieldWrapper = <T extends FieldValues>(props: FormFieldWrapperProps<T>): ReactNode => {
  const { form, name, children, label, showError = true, classNames } = props;

  const id = useId();

  const renderFormField = useCallback(() => {
    return (
      <Controller
        control={form.control}
        name={name}
        render={(renderProps: FormFieldContextProps<T>) => {
          const { fieldState } = renderProps;

          return (
            <label htmlFor={id} className={cn("flex flex-col gap-2", classNames?.label)}>
              <span className={cn("text-white font-medium", classNames?.labelText)}>{label}</span>
              {children(renderProps, id)}
              {showError && fieldState.error && (
                <FormFieldError
                  error={fieldState.error}
                />
              )}
            </label>
          );
        }}
      />
    )
  }, [children, form.control, name]);

  return (
    <FormFieldContext.Consumer>
      {renderFormField}
    </FormFieldContext.Consumer>
  );
};
