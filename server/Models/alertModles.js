export function insertFieldsModel(alert) {

    return {

        displayName: alert.displayName,
        description: alert.description,
        priority: alert.priority,
        arena: alert.arena,
        status: alert.status,
        lon: alert.lon,
        lat: alert.lat,
        createdAt: new Date().toISOString(),
        updatedAt: null,
        
    }
}