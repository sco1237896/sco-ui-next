import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  ActionGroup,
  Button,
  Form,
  FormGroup,
  TextInput,
} from '@patternfly/react-core';

const FormComponent = ({ defaultState = false }) => {
  const [isSubmitted, setIsSubmitted] = useState(defaultState);

  return (
    <Form>
      <div>
        Has the form been submitted?{' '}
        <strong>{isSubmitted ? <>🥳 Omg! Yes</> : <>🥲 Sadly, No</>}</strong>
      </div>
      <FormGroup label={'Name'}>
        <TextInput
          isRequired
          type="text"
          id="name"
          name="name"
          aria-describedby="name-helper"
          value={'something'}
          onChange={() => {
            console.log('handle change');
          }}
        />
      </FormGroup>
      <ActionGroup>
        <Button variant="primary" onClick={() => setIsSubmitted(true)}>
          Submit
        </Button>
        <Button variant="link" onClick={() => setIsSubmitted(false)}>
          Clear
        </Button>
      </ActionGroup>
    </Form>
  );
};

export default {
  title: 'Components/ExampleForm',
  component: FormComponent,
} as Meta<typeof FormComponent>;

const Template: StoryFn<typeof FormComponent> = (args) => {
  console.log(args);
  return <FormComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const OverriddenWithArgs = Template.bind({});
OverriddenWithArgs.args = {
  defaultState: true,
};
