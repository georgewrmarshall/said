import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';

// Components
import { Button } from '../Button';
import { Input } from '../Input';

// Styles
import { StyledForm } from './styles';

export const Form = ({ ...props }) => {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);

  const handleChange = e => {
    console.log('email', email);
    return setEmail(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const mcResult = await addToMailchimp(email, {});
    setResult(mcResult);
  };

  return (
    <StyledForm onSubmit={handleSubmit} {...props}>
      <label htmlFor="email">
        <span>Subscribe</span>
        <Input
          type="email"
          onChange={handleChange}
          name="email"
          id="email"
          placeholder="email"
          required
        />
        <Button type="submit">Submit</Button>
      </label>
      {result && result.msg && (
        <span
          dangerouslySetInnerHTML={{
            __html: `<span>${result.result}</span>! ${result.msg}`,
          }}
        />
      )}
    </StyledForm>
  );
};
