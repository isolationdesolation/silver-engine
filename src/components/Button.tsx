import React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  specialProp?: string;
}

export function Button(props: ButtonProps) {
  const { specialProp, ...rest } = props;
  // do something with specialProp
  return <button {...rest} />;
}