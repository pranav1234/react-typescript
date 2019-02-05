import * as React from 'react';
import { Header, Container, Segment, Visibility, Responsive, Menu ,Button} from 'semantic-ui-react';
type Props = {
  label: string;
  logout: () => any
};


export const Home: React.FC<Props> = props => {
const fixed = 'top'
  return (
    <div>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
        >
          <Segment
            inverted={true}
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical={true}
          >
            <Menu
              fixed={fixed ? 'top' : undefined}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active = {true}>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed} onClick={props.logout}>
                    Log out
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <Container text={true}>
              <Header
                as='h1'
                content={`${props.label}`}
                inverted={true}
                style={{
                  fontSize: '4em',
                  fontWeight: 'normal',
                  marginBottom: 0,
                  marginTop: '3em',
                }}
              />

            </Container>
          </Segment>
        </Visibility>
      </Responsive>


    </div>
  );
};
Home.defaultProps = {
  label: 'Home Page'

}