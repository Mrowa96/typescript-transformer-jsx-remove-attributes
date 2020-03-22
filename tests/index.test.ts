import transform from './helpers/transform';

describe('removeJsxAttributesTransformer', () => {
  it('should remove data-testid attribute', () => {
    expect(
      transform('<div><p data-testid="paragraph" class="paragraph">Some paragraph</p></div>', ['data-testid']),
    ).toEqual('<div><p class="paragraph">Some paragraph</p></div>;');
  });

  it('should remove any other attribute', () => {
    expect(
      transform('<div><p aria-label="Some label" class="paragraph">Some paragraph</p></div>', ['aria-label']),
    ).toEqual('<div><p class="paragraph">Some paragraph</p></div>;');
  });

  it('should remove two attributes', () => {
    expect(
      transform('<div><p data-testid="paragraph" aria-label="Some label" class="paragraph">Some paragraph</p></div>', [
        'data-testid',
        'aria-label',
      ]),
    ).toEqual('<div><p class="paragraph">Some paragraph</p></div>;');
  });

  it('should remove attribute only from jsx', () => {
    expect(transform('var attr = "data-testid";', ['data-testid'])).toEqual('var attr = "data-testid";');
  });
});
