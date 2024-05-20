export const TourGuide = (steps) => {
  // Ensure that EnjoyHint is available in the global scope
  if (window.EnjoyHint) {
    const EnjoyHint = window.EnjoyHint;
    const enjoyhint_instance = new EnjoyHint({});
    const enjoyhint_script_steps = steps;

    // Set script config
    enjoyhint_instance.set(enjoyhint_script_steps);

    // Run EnjoyHint script
    enjoyhint_instance.run();
  } else {
    console.error('EnjoyHint is not loaded');
  }
};
