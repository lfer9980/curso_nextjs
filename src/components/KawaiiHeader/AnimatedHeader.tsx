import React from 'react'
import { Header, Transition } from 'semantic-ui-react'

import { Avocado } from '@components/SVGIcons';

type AnimatedHeaderProps = {
	visible: boolean
	onClick: () => void
	onComplete: () => void
}

function AnimatedHeader({
	visible,
	onClick,
	onComplete,
}: AnimatedHeaderProps) {
	return (
		<Header size="huge" as="h1" onClick={onClick}>
			Platzi
			<Transition
				animation="jiggle"
				visible={visible}
				duration={900}
				onComplete={onComplete}
			>
				<Avocado size="58px" />
			</Transition>
			Avo
		</Header>

	);
}

export default AnimatedHeader
