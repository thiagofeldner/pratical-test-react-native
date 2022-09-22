import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
  categories: {
    width: 74,
    height: 74,
    borderRadius:4,
    overflow: 'hidden',
    marginLeft: 16,
    marginTop: 10
  },
  title: {
    width: 73,
    height: 16,
    marginTop: 8,
    marginLeft: 16,
    color: THEME.COLORS.TEXT,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM
  }
});