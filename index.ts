import {
  Node,
  TransformerFactory,
  TransformationContext,
  Visitor,
  isJsxAttribute,
  visitEachChild,
  visitNode,
} from 'typescript';

export default function removeJsxAttributesTransformer<T extends Node>(attributes: string[]): TransformerFactory<T> {
  return (context: TransformationContext): ((node: T) => T) => {
    const visitor: Visitor = node => {
      if (isJsxAttribute(node)) {
        if (attributes.includes(node.name.getText())) {
          return undefined;
        }
      }

      return visitEachChild(node, visitor, context);
    };

    return (node: T): T => visitNode(node, visitor);
  };
}
