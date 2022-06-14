export const initialState = {
    policyNumber: '',
    policyHolder: {
        name: '',
        address: ['', '', ''],
        occupation: '',
        dob: '',
        ukResidentSince: '',
        licenceType: '',
        datePassedTest: '',
        drivingLicenceNumber: '',
        NCB: '',
        claimsAndConvictions: [],
        paymentInformation: {
            accountNumber: null,
            sortCode: '',
        }
    },
    policyType: '',
    price: {
        total: '',
        type: '',
    },
    car: {
        registration: '',
        make: '',
        model: '',
        value: null,
        annualMilage: null,
        purchaseDate: '',
        overnightLocation: '',
        registeredOwner: '',
    },
    policyDetails: {
        start: '',
        end: '',
        excess: {
            compulsory: null,
            voluntary: null,
        },
        usage: '',
        extras: {
            "90 Days European Cover": true,
            "Driving other cars": true,
            "Courtesy car": true,
            "Key cover": true,
        },
        optionalExtras: {
            "Personal Accident Cover": false,
            "Legal Expenses": false,
            "Breakdown Cover": false,
            "Hire Car Cover": false
        }
    }
}