import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
	landscape: ({ width, height, bgSize, borderRadius, image, opacity }) => ({
		backgroundImage: `url(${image || 'http://clarovideocdn5.clarovideo.net/pregeneracion//cms/images/202001/75478_Default_Passangers-now_16154434.jpg'})`,
		position: 'relative',
		margin: height * 0.06,
		backgroundSize: bgSize || 290,
		padding: 10,
		borderRadius: borderRadius || 6,
		boxSizing: 'border-box',
		boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
		height: height || 145,
		width: width || 290,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		"&:hover": {
			width: width + width * 0.06,
			height: height + height * 0.13,
			backgroundSize: bgSize + bgSize * 0.13,
			margin: 0
		},
		"&:focus": {
			width: width + width * 0.13,
			height: height + height * 0.13,
			backgroundSize: bgSize + bgSize * 0.13,
			marginTop: 0,
		}
	}),
	backgroundOpacity: {
		background: 'rgba(0, 0, 0, 0.7)',
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		zIndex: 0
	},
	typography: ({ width }) => ({
		color: 'white',
		marginTop: 10,
		width: width || 290
	})
}));

const CardLandscape = ({ width, height, bgSize, borderRadius, title = false, image, children, opacity = null }) => {

	const classes = useStyles({ width, height, bgSize, borderRadius, image, opacity });

	return (
		<React.Fragment>
			<div className={`${classes.landscape}`}>
				{opacity ? <div className={classes.backgroundOpacity}/> : null }
				{children}
			</div>
			{title &&
				<Typography className={classes.typography} variant="body1" noWrap>
					{title}
				</Typography>
			}
		</React.Fragment>
	)
}
export default CardLandscape