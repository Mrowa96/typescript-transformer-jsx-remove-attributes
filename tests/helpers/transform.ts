import { transpileModule, JsxEmit } from 'typescript';
import { removeJsxAttributesTransformer } from '../../src/index';

export default function transform(source: string, attributes: string[]): string {
  return transpileModule(source, {
    compilerOptions: {
      jsx: JsxEmit.Preserve,
    },
    transformers: { before: [removeJsxAttributesTransformer(attributes)] },
  }).outputText.trim();
}
