import React from 'react'
import { stopUndefined } from 'utils'
//components
import { ExportMolecules } from 'componentMolecules'

const { FinalInputSelect } = stopUndefined(ExportMolecules)

const VALUE = 'value'
const LABEL = 'label'
const IS_DISABLED = 'isDisabled'

const year = new Date().getFullYear()

const yearOptions = Array.from(new Array(30), (e, i) => {
	const yearString = (year + i).toString()
	return { [VALUE]: yearString, [LABEL]: yearString }
})

yearOptions.unshift({ [VALUE]: '', [LABEL]: 'Year', [IS_DISABLED]: true })

const FinalExpiryYear = props => {
	const { onValueChange, validation, ...restProps } = props
	return (
		<FinalInputSelect
			validation={value => validation(value, yearOptions)}
			onChange={e => {
				onValueChange(e.target.value[VALUE])
			}}
			options={yearOptions}
			{...restProps}
		/>
	)
}

export { FinalExpiryYear }