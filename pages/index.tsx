import { Form, Button } from 'antd';
import React from 'react';
import { observer, inject } from 'mobx-react';

const FormItem = Form.Item;

const IndexPage = inject('userStore')(
  observer((props: any) => (
    <div style={{ marginTop: 100 }}>
      <Form layout="horizontal">
        <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
          <Button
            onClick={() =>
              props.userStore.signIn({
                email: 'test@test.test',
                password: 'test22',
              })
            }
            size="large"
            type="primary"
            htmlType="submit">
            signin
          </Button>
          <Button
            onClick={() => props.userStore.logout()}
            size="large"
            style={{ marginLeft: 8 }}>
            logout
          </Button>
        </FormItem>
      </Form>
    </div>
  ))
);

export default IndexPage;
