import React from 'react';
import { questionData } from '../../../mock/question';
import { CollapseStyle, Container, Div, Flexing, Wrap } from './style';

const { Panel } = CollapseStyle;

export const Question = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <Container>
      <Container.Header>
        Ko‘p beriladigan <span className='span'>savollarga javoblar</span>
      </Container.Header>
      <Container.Text>
        Quyida bizning ustun jihatlarimiz bilan tanishing
      </Container.Text>

      <CollapseStyle defaultActiveKey={['1']} onChange={onChange}>
        {questionData.map((value) => {
          return (
            <Panel
              header={
                <Flexing>
                  <Div>
                    <Flexing.Circle>{value.id}</Flexing.Circle>
                    <Flexing.Title className='text'>
                      {value.title}
                    </Flexing.Title>
                  </Div>
                </Flexing>
              }
              key={value.id}
            >
              <Wrap>
                <Wrap.TickCon>
                  <Wrap.Icons />
                </Wrap.TickCon>
                <CollapseStyle.Text>{value.item}</CollapseStyle.Text>
              </Wrap>
            </Panel>
          );
        })}
      </CollapseStyle>
    </Container>
  );
};

export default Question;
