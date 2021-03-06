import React from 'react';
import renderer from 'react-test-renderer';
import ProtoJsonView from '../src';


test('test component', () => {
  const source = '{"retCode":144115199742103.334,"isValid":false,"list":[1, 2, 3],"retData":{"respBodyMsg":{"users":[{"uid":2639271515,"class_id":0,"ts":1522659325},{"uid":144115199742103334,"class_id":0,"ts":1522728716,"uid_type":2}],"shards":1,"tid":2000006564,"cid":76629},"respHeader":{"time":324,"remote":"/10.60.38.128:35770","errmsg":"","errcode":0}},"retMsg":null}';
  const component = renderer.create(<ProtoJsonView
    src={source}
    collapsed={false}
    rootName="ROOT"
  />);

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
