import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16,
   },
   perfil:{
    position: 'absolute',
    width: 32,
    height: 32,
    top: 19,
    left: 327,
   },
  foryou:{
    position: 'absolute',
    width: 130,
    height: 32,
    top: 12,
    left: 24,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LLG,    
  },
  textfor: {
    position: 'absolute',
    width: 88,
    height: 22,
    top: 108,
    left: 16,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LG,
  },
  categories: {
    position: 'absolute',
    width: 98,
    height: 22,
    left: 16,
    top: 380,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LG,
  },
  maislidos:{
    position: 'absolute',
    width: 250,
    height: 22,
    left: 16,
    top: 480,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LG,
  }
});
