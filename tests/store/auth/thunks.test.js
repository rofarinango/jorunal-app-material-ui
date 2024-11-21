import { signInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, logout, startGoogleSignIn } from "../../../src/store/auth";
import { checkingAuthentication } from "../../../src/store/auth/thunks"
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers');

describe('Pruebas en AuthThunks', () => { 
    const dispatch = jest.fn();
    beforeEach(()=> jest.clearAllMocks());
    test('debe de invocar el checkingCredentials', async() => { 
        
        await checkingAuthentication()( dispatch );
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
     });

     test('startGoogleSignIn debe de llamar checking Credentials y login - Exito', async() => { 
        
        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue( loginData );

        // thunk
        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ));

      })

      test('startGoogleSignIn debe de llamar checkingCredentials y logout - Error', async() => { 
        const loginData = { ok: false, errorMessage: 'Un error en Google'};
        await signInWithGoogle.mockResolvedValue( loginData);

        // thunk
        await startGoogleSignIn()( dispatch );
        
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout(loginData.errorMessage));
       })  
 });

