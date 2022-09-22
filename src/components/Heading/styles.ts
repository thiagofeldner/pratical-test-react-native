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
    marginTop: 10,
    left: 327,
   },
  foryou:{
    position: 'absolute',
    width: 130,
    height: 32,
    marginTop: 10,
    marginLeft: 16,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LLG,    
  },
  textfor: {
    position: 'absolute',
    width: 88,
    height: 22,
    marginTop: 80,
    marginLeft: 16,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LG,
  },
  categories: {
    position: 'absolute',
    width: 98,
    height: 22,
    marginLeft: 16,
    marginTop: 329,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LG,
  },
  booksread:{
    position: 'absolute',
    width: 250,
    height: 22,
    marginLeft: 16,
    marginTop: 480,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: THEME.FONT_SIZE.LG,
  }
});
