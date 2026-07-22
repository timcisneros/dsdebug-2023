import { Box } from '@chakra-ui/react';

const SvgIcon = ({ src, color = 'currentColor', size = '24px', ...props }) => {
    const assetPath = `/${src.replace(/^\//, '').split('#')[0]}`;

    return (
        <Box
            as="span"
            aria-hidden="true"
            display="inline-block"
            flexShrink={0}
            width={size}
            height={size}
            backgroundColor={color}
            maskImage={`url("${assetPath}")`}
            maskPosition="center"
            maskRepeat="no-repeat"
            maskSize="contain"
            {...props}
        />
    );
};

export default SvgIcon;
