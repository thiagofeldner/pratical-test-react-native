import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
  cover :{
   width: 104,
   height: 160,
   borderRadius: 4,
   overflow: 'hidden',
   marginTop: 80,
   marginLeft:14
  },
  title: {
    width: 104,
    height: 34,
    top: 2,
    marginLeft:14,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.MD
  },
  author: {
    width: 104,
    height: 54,
    top: 6,
    marginLeft: 14,
    color: THEME.COLORS.AUTHOR,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM
  }
});

