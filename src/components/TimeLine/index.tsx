import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import BeginingIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

export default function CustomizedTimeline() {
  return (
    <Timeline position='alternate'>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <BeginingIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
            2008
          </Typography>
          <Typography>
            <p>Fundada a Negro com o nome Eletronegro, tendo como</p>
            <p>atividade principal o varejo de materiais elétricos.</p>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color='error'>
            <ChangeCircleIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'error.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
            2017
          </Typography>
          <Typography>
            <p>Buscando firmar e difundir melhor a marca, a empresa</p>
            <p>altera sua logo e passa a chamar-se Negro</p>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'error.main' }} />
          <TimelineDot color='primary'>
            <EditLocationAltIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
            2018
          </Typography>
          <Typography>Mudança de endereço e inauguração de nova loja</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          <TimelineDot color='success'>
            <AddBusinessIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'success.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
            2019
          </Typography>
          <Typography>
            <p>Início das atividades de engenharia, desenvolvendo e</p>
            <p>implementando projetos em órgãos públicos e privados</p>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'success.main' }} />
          <TimelineDot color='secondary'>
            <EngineeringIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant='h6' component='span'>
            2021
          </Typography>
          <Typography>
            <p>Venda da loja física, direcionando a empresa</p>
            <p>a construção civil e serviços de engenharia.</p>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
