import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colorsResult = await ImageColors.getColors(uri, {});
  let primary;
  let secondary;
  switch (colorsResult.platform) {
    case 'android':
      // android colorsResult properties
      primary = colorsResult.dominant;
      secondary = colorsResult.average;
      break;
    case 'ios':
      // iOS colorsResult properties
      primary = colorsResult.primary;
      secondary = colorsResult.secondary;
      break;
    default:
      throw new Error('Unexpected platform key');
  }
  return [primary, secondary];
};
