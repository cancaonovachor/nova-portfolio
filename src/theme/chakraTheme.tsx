import { extendTheme } from '@chakra-ui/react';
import { Text } from './textTheme';

export const chakraTheme = extendTheme({
  colors: {
    teams: {
      100: '#33AA33', // sysdev
      200: '#23C5EB', // goods
    },
  },
  components: {
    Text,
  },
});
