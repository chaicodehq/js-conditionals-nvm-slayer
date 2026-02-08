/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  if (hours <= 0) {
    return -1;
  }

  vehicleType = vehicleType.toLowerCase();
  hours = Math.ceil(hours);

  if (vehicleType == "car") {
    if (hours == 1) {
      return 5;
    } else {
      var remaining_hours = hours - 1;
      var fee = 5 + remaining_hours * 3;
      if (fee > 30) {
        return 30;
      }
      return fee;
    }
  }

  else if (vehicleType == "motorcycle") {
    if (hours == 1) {
      return 3;
    } else {
      var remaining_hours = hours - 1;
      var fee = 3 + remaining_hours * 2;
      if (fee > 18) {
        return 18;
      }
      return fee;
    }
  }

  else if (vehicleType == "bus") {
    if (hours == 1) {
      return 10;
    } else {
      var remaining_hours = hours - 1;
      var fee = 10 + remaining_hours * 7;
      if (fee > 60) {
        return 60;
      }
      return fee;
    }
  }

  else {
    return -1;
  }
}
