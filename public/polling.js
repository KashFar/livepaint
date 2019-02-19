// Add logic to this script to poll server every second for updated pixels.

let clientSequence = 0    // represents where client is at regarding master list
const clientUpdates = []    // everything client done in last second

function pollForUpdates() {
    const requestOptions = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            clientUpdates,
            clientSequence
        })
    }

    //clear clientUpdates array since we don't want updates sent twice
    clientUpdates.length = 0

    // fetch in function so we can keep calling it recursively
    fetch('/updates', requestOptions)
        .then(res => res.json())
        .then(res => {
            //bitmap.setColor(...color) === bitmap.setColor(update[0], update[1], update[2])
            res.updates.forEach(update => bitmap.setColor(...update, false))
            clientSequence = res.sequence;
            setTimeout(pollForUpdates, 1000)
        })
}

pollForUpdates()