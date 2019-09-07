import React from 'react'
import {
	FinalTextEmail,
	FINAL_TEXT_EMAIL,
} from 'componentnCompounds/FinalTextEmail/FinalTextEmail'
// api
import { handleIsEmailNotExist, handleIsPasswordResetAble } from 'api'
// validation
import { signUpEmailValidation, signInEmailValidation } from 'utils'
// components
import { stopUndefined } from 'utils'
import { ExportMolecules } from 'componentMolecules'

const { LabelFormPropedInput } = stopUndefined(ExportMolecules)

const FinalTextEmailPropedSignUp = props => {
	return (
		<FinalTextEmail
			validation={signUpEmailValidation}
			serverValidation={handleIsEmailNotExist}
			{...props}
		/>
	)
}

const FinalTextEmailPropedSignIn = props => {
	return (
		<FinalTextEmail validation={signInEmailValidation} hideSuccess {...props} />
	)
}

const FinalTextEmailPropedForgotPassword = props => {
	return (
		<FinalTextEmail
			validation={signInEmailValidation}
			serverValidation={handleIsPasswordResetAble}
			hideSuccess
			{...props}
		/>
	)
}

const FinalTextEmailPropedAccount = props => {
	return (
		<LabelFormPropedInput label='Email' htmlFor={FINAL_TEXT_EMAIL}>
			<FinalTextEmail
				validation={signInEmailValidation}
				hideSuccess
				onlyShowErrorAfterSubmit
				{...props}
			/>
		</LabelFormPropedInput>
	)
}

export {
	FinalTextEmailPropedSignUp,
	FinalTextEmailPropedSignIn,
	FinalTextEmailPropedForgotPassword,
	FinalTextEmailPropedAccount,
	FINAL_TEXT_EMAIL,
}
