import React from 'react';

const QuesFour = () => {
    return (
        <div>
            <p>
                JWT / JSON Web Token is an open standard used in sharing security information between  a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            <h3>How JWT works?</h3>
            <p>JWTs contain a set of claims the are used to transmit information between two parties. These claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>

            <p>Once decoded, you will get two JSON strings:

                The header and the payload.
                The signature.
                The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.</p>

            <p>The payload contains the claims usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.</p>

            <p>The signature ensures that the token has not been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </p>
        </div>
    );
};

export default QuesFour;