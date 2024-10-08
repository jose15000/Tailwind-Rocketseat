import { ComponentProps } from "react";

export interface inputProps {
  className: string;
}

export interface InputPrefixProps extends ComponentProps<"div"> {}

export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />;
}

type InputControlProps = ComponentProps<"input">;

export function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  );
}

export type inputRootProps = ComponentProps<"div">;

export interface InputProps extends ComponentProps<"div"> {}
export function InputRoot(props: inputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
}
