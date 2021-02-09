import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { useHistory } from 'react-router-dom';
import db from '../firebase';
import "./Plans.css";

export const Plans = () => {
    const user = useSelector(selectUser);
    const history = useHistory();

    const [plans, setPlans] = useState([]);
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        db.collection('subscriptions')
            .doc(user.email)
            .get()
            .then(querySnapshot => {
                setSubscription(querySnapshot.data());
            })
        
    }, [user.email]);

    useEffect(() => {
        db.collection('plans')
            .get()
            .then(querySnapshot => {
                setPlans(querySnapshot.docs)
            });
    }, []);

    
    const choosePlan = (plan) => {
        if (plan === subscription.plan) {
            console.log('es el mismo plan');
            
        } else {
            alert("Aqui se deberia abrir una pasarela de pago");
            db.collection('subscriptions')
                .doc(user.email)
                .set({
                    plan: plan
                })
                history.push("/");
        }
    }

    return (
        <div className="plansScreen">
            <br />
            {subscription && <p>Plan Actual: {subscription.plan} </p>}

            {plans.map(plan => (
                
                <div key={plan.id} className={`${subscription.plan === plan.data().type ? 'plansScreen__plan-disabled plansScreen__plan' : 'plansScreen__plan'}`}>
                    <div className="plansScreen__info">
                        <h4>{plan.data().type}</h4>
                        <h5>{plan.data().price}</h5>
                        
                    </div>
                    <button onClick={() => choosePlan(plan.data().type) }>
                        {subscription.plan === plan.data().type ? 'Paquete Actual' : 'Suscribir'}
                    </button>
                </div>
            ))}
        </div>
    )
}
