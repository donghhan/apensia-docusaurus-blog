import { HighlightedCode, Pre } from "codehike/code";
import { callout } from "./annotations/callout";
import { diff } from "./annotations/diff";

export function MyCode({ codeblock }: { codeblock: HighlightedCode }) {
  return (
    <div>
      <Pre
        code={codeblock}
        handlers={[callout, diff]}
        style={{ background: "#212121", color: "#fafafa" }}
      />
    </div>
  );
}
