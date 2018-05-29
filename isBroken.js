export default function isBroken(uselessArgWeArentGoingToUse) {
  http.requestFromMicroService(globalVariableWeAreGoingToMutate);

  throw globalVariableWeAreGoingToMutate.badlyNamedProperty
      ? new Error("Terrible error message")
      : new Error("Horrible error message");
}
