import React from 'react';
import {Container as ContainerContent} from 'semantic-ui-react';

const Container = ({children}) => {
  return (
    <ContainerContent text>{children}</ContainerContent>
  )
}

export default Container