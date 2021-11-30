import React from 'react'

const MailTo = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
}

  ReactDOM.render(
    <Mailto email="foo@bar.baz" subject="Hello & Welcome" body="Hello world!">
      Mail me!
    </Mailto>,
    document.getElementById('root')
  );

export default MailTo
