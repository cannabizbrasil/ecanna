import { useHubspotForm } from 'next-hubspot';

const HubspotEcannaForm = () => {
    const { loaded, error, formCreated } = useHubspotForm({
        portalId: '43817859',
        formId: '659a1d58-fc4d-41cc-a7ca-711cc162793a',
        target: '#hubspot-form-ecanna'
    });

    return (
        <div id="hubspot-form-ecanna" />
    )
}

export default HubspotEcannaForm;