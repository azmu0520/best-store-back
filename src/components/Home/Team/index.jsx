import React from 'react';
import { Button, Card, Container, Wrap, WrapGrid } from './style';
import { teamData } from '../../../mock/team.js';
import GenericTeamCard from '../../Generic/TeamCard';
export const Team = () => {
  return <GenericTeamCard home={true} />;
};

export default Team;
