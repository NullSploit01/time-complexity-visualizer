import { SxProps } from '@mui/system';

type IKey = 'container';

export const centerBox: Record<IKey, SxProps> = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};
