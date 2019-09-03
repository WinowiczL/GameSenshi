import { auth } from 'firebaseInit'

const provider = new auth.FacebookAuthProvider()

const handleSignInWithFacebook = onFailure => {
	auth()
		.signInWithRedirect(provider)
		.catch(onFailure)
}

export default handleSignInWithFacebook
