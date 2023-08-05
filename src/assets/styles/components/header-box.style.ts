import { SxProps } from '@mui/system';

type IKey = 'container' | 'headingContainer';

export const headerBox: Record<IKey, SxProps> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 300,
    mt: 10,
  },
  headingContainer: {
    height: 100,
    pb: 7,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};
