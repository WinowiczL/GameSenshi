import React from 'react'
import { FinalTextName, FINAL_TEXT_NAME } from './FinalTextName'

import { signUpUsernameValidation, stopUndefined } from '1_utils'

// components
import { Exports } from '4_comp_3_Molecules'

const { LabelForm } = stopUndefined(Exports)

const FinalTextNamePropedSignUp = props => {
	return <FinalTextName validation={signUpUsernameValidation} {...props} />
}

const FinalTextNamePropedGeneraL = props => {
	return (
		<LabelForm label='Display Name' htmlFor={FINAL_TEXT_NAME}>
			<FinalTextName
				icon=''
				validation={signUpUsernameValidation}
				onlyShowErrorAfterSubmit
				{...props}
			/>
		</LabelForm>
	)
}

export {
	FinalTextNamePropedSignUp,
	FinalTextNamePropedGeneraL,
	FINAL_TEXT_NAME,
}