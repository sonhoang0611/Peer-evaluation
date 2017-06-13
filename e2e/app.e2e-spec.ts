import { PeerEvaluationPage } from './app.po';

describe('peer-evaluation App', () => {
  let page: PeerEvaluationPage;

  beforeEach(() => {
    page = new PeerEvaluationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
