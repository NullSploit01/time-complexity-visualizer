import { SxProps } from '@mui/system';

type IKey = 'container';

export const headerBox: Record<IKey, SxProps> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 300,
    mt: 10,
  },
};
