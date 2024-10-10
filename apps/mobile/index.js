import { combineContexts, MicroAppRoot } from "@micro/core-navigation";
import { registerRootComponent } from "expo";

const contexts = [
  {
    context: require.context("./app", true, /.*/),
    prefix: ".",
  },
  {
    context: require.context("../payments/app/(payments)", true, /.*/),
    prefix: "(payments)",
  },
  {
    context: require.context("../support/app/(support)", true, /.*/),
    prefix: "(support)",
  },
];

// Log the combined context to see the result
const combinedContext = combineContexts(contexts);
// console.log("🚀 ~ combinedContext:", combinedContext);
combinedContext.keys().forEach((key: string) => {
  console.log(`Module for key ${key}:`, combinedContext(key));
});

// Must be exported or Fast Refresh won't update the context
export function App() {
  return <MicroAppRoot contexts={contexts} />;
}

registerRootComponent(App);
