import { ExtensionContext } from "@foxglove/studio";
import { initMushrTeleop } from "./MushrTeleop";

export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerPanel({ name: "MushrTeleop", initPanel: initMushrTeleop });
}
