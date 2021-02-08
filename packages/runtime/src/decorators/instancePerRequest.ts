/**
 * Indicates that a new instance of the controller should be created for each request.
 * This is the default behavior.
 */
export function NewInstancePerRequest(): Function {
  return () => {
    return;
  };
}

/**
 * Indicates that the controller should be obtained from the current `IoCContainer` on each request.
 */
export function NoNewInstancePerRequest(): Function {
  return () => {
    return;
  };
}
