import {HttpUtils} from '@@share/utils/http.utils';

describe('HttpUtils', () => {

  it('should create http params', () => {
    const httpParams = HttpUtils.createQueryParams({
      surveyToken: 'xyz'
    });
    expect(httpParams.get('surveyToken')).toBe('xyz');
    expect(httpParams.toString()).toEqual('surveyToken=xyz');
  });

  it('should create http params and ignore null and undefined properties', () => {
    const httpParams = HttpUtils.createQueryParams({
      surveyToken: 'xyz',
      nullProperty: null,
      undefinedProperty: undefined
    });
    expect(httpParams.get('surveyToken')).toBe('xyz');
    expect(httpParams.get('nullProperty')).toBe(null);
    expect(httpParams.get('undefinedProperty')).toBe(null);
    expect(httpParams.toString()).toEqual('surveyToken=xyz');
  });

  it('should create http params from string array', () => {
    const httpParams = HttpUtils.createQueryParams({
      letter: ['a', 'b', 'c']
    });
    expect(httpParams.getAll('letter')).toEqual(['a', 'b', 'c']);
    expect(httpParams.toString()).toEqual('letter=a&letter=b&letter=c');
  });

  it('should create http params from number array', () => {
    const httpParams = HttpUtils.createQueryParams({
      number: [1, 2, 3.4]
    });
    expect(httpParams.getAll('number')).toEqual(['1', '2', '3.4']);
    expect(httpParams.toString()).toEqual('number=1&number=2&number=3.4');
  });
});
