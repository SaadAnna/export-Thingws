// OrdersExport.jsx
import { useState, useEffect } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import './OrdersExport.css'; // Import the CSS file

// Import icons from lucide-react
import { Calendar, ChevronDown, Settings, Mail, X } from 'lucide-react';

// Sortable item component for drag-and-drop
const SortableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="sortable-item">
      {children}
    </div>
  );
};

export default function OrdersExport() {
  // State for date range picker
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  
  // State for dropdowns
  const [orderStatus, setOrderStatus] = useState('All');
  const [paymentStatus, setPaymentStatus] = useState('All');
  const [fulfillmentStatus, setFulfillmentStatus] = useState('All');
  
  // UI state
  const [isFiltered, setIsFiltered] = useState(false);
  
  // Sample orders for the list
  const [orders, setOrders] = useState([
    { id: '1', number: '#1001', customer: 'John Doe', date: '2025-04-24', total: '$129.99', status: 'Open' },
    { id: '2', number: '#1002', customer: 'Jane Smith', date: '2025-04-23', total: '$89.50', status: 'Closed' },
    { id: '3', number: '#1003', customer: 'Bob Johnson', date: '2025-04-22', total: '$210.75', status: 'Open' },
    { id: '4', number: '#1004', customer: 'Alice Brown', date: '2025-04-21', total: '$45.00', status: 'Cancelled' },
  ]);

  // Set up sensors for drag and drop
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  // Handle drag end
  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (active.id !== over.id) {
      setOrders((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id);
        const newIndex = items.findIndex(item => item.id === over.id);
        
        const newArray = [...items];
        const [removed] = newArray.splice(oldIndex, 1);
        newArray.splice(newIndex, 0, removed);
        
        return newArray;
      });
    }
  };

  // Check if filters are applied
  useEffect(() => {
    if (orderStatus !== 'All' || paymentStatus !== 'All' || fulfillmentStatus !== 'All' || startDate || endDate) {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, [orderStatus, paymentStatus, fulfillmentStatus, startDate, endDate]);

  // Reset filters
  const clearFilters = () => {
    setOrderStatus('All');
    setPaymentStatus('All');
    setFulfillmentStatus('All');
    setStartDate(null);
    setEndDate(null);
    setIsFiltered(false);
  };

  // Handle export actions
  const handleExport = (filtered = false) => {
    alert(`Exporting ${filtered ? 'filtered' : 'all'} orders. Redirecting to loading page...`);
    // Here you would navigate to the loading page
  };

  // Handle contact us
  const handleContactUs = () => {
    window.location.href = 'mailto:example@email.com';
  };

  return (
    <div className="orders-export-container">
      <div className="header">
        <h1>Orders to Export</h1>
        <a href="/settings" className="settings-link">
          <Settings className="icon" />
          Export Settings
        </a>
      </div>
      
      {/* Filter Section */}
      <section className="filter-section">
        <h2>Filters</h2>
        
        <div className="filter-grid">
          {/* Date Range */}
          <div className="filter-item">
            <button 
              onClick={() => setShowCalendar(!showCalendar)} 
              className="date-range-button"
            >
              <span>{startDate && endDate ? `${startDate} - ${endDate}` : "Date Range"}</span>
              <Calendar className="icon" />
            </button>
            
            {showCalendar && (
              <div className="calendar-dropdown">
                <div className="date-inputs">
                  <div>
                    <label>Start Date</label>
                    <input 
                      type="date" 
                      value={startDate || ''}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>End Date</label>
                    <input 
                      type="date" 
                      value={endDate || ''}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="calendar-actions">
                  <button 
                    onClick={() => setShowCalendar(false)}
                    className="apply-button"
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Order Status Dropdown */}
          <div className="filter-item">
            <div className="select-wrapper">
              <select
                value={orderStatus}
                onChange={(e) => setOrderStatus(e.target.value)}
                className="filter-select"
              >
                <option value="All">Order Status: All</option>
                <option value="Open">Order Status: Open</option>
                <option value="Closed">Order Status: Closed</option>
                <option value="Cancelled">Order Status: Cancelled</option>
              </select>
              <ChevronDown className="select-icon" />
            </div>
          </div>
          
          {/* Payment Status Dropdown */}
          <div className="filter-item">
            <div className="select-wrapper">
              <select
                value={paymentStatus}
                onChange={(e) => setPaymentStatus(e.target.value)}
                className="filter-select"
              >
                <option value="All">Payment Status: All</option>
                <option value="Authorized">Payment Status: Authorized</option>
                <option value="Paid">Payment Status: Paid</option>
                <option value="Partially Refunded">Payment Status: Partially Refunded</option>
                <option value="Partially Paid">Payment Status: Partially Paid</option>
                <option value="Pending">Payment Status: Pending</option>
                <option value="Refunded">Payment Status: Refunded</option>
                <option value="Unpaid">Payment Status: Unpaid</option>
                <option value="Voided">Payment Status: Voided</option>
              </select>
              <ChevronDown className="select-icon" />
            </div>
          </div>
          
          {/* Fulfillment Status Dropdown */}
          <div className="filter-item">
            <div className="select-wrapper">
              <select
                value={fulfillmentStatus}
                onChange={(e) => setFulfillmentStatus(e.target.value)}
                className="filter-select"
              >
                <option value="All">Fulfillment Status: All</option>
                <option value="Fulfilled">Fulfillment Status: Fulfilled</option>
                <option value="Unfulfilled">Fulfillment Status: Unfulfilled</option>
                <option value="Partially Fulfilled">Fulfillment Status: Partially Fulfilled</option>
                <option value="Scheduled">Fulfillment Status: Scheduled</option>
              </select>
              <ChevronDown className="select-icon" />
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="action-buttons">
          <button 
            onClick={() => handleExport(false)}
            className="export-all-button"
          >
            Export All
          </button>
          
          {isFiltered && (
            <>
              <button 
                onClick={() => handleExport(true)}
                className="export-filtered-button"
              >
                Export Filtered
              </button>
              
              <button 
                onClick={clearFilters}
                className="clear-filters-button"
              >
                <X className="icon" />
                Clear Filters
              </button>
            </>
          )}
          
          <button 
            onClick={handleContactUs}
            className="contact-button"
          >
            <Mail className="icon" />
            Contact Us
          </button>
        </div>
      </section>
      
      {/* Orders List with Drag and Drop */}
      <section className="orders-section">
        <h2>Orders</h2>
        
        <div className="order-grid header-row">
          <div>Order</div>
          <div>Customer</div>
          <div>Date</div>
          <div>Total</div>
          <div>Status</div>
        </div>
        
        <DndContext 
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={orders.map(order => order.id)}
            strategy={verticalListSortingStrategy}
          >
            {orders.map(order => (
              <SortableItem key={order.id} id={order.id}>
                <div className="order-grid">
                  <div>{order.number}</div>
                  <div>{order.customer}</div>
                  <div>{order.date}</div>
                  <div>{order.total}</div>
                  <div>{order.status}</div>
                </div>
              </SortableItem>
            ))}
          </SortableContext>
        </DndContext>
      </section>

      {/* Settings Section (stub) - hidden by default */}
      <section className="settings-section hidden">
        <h2>Export Settings</h2>
        
        <div className="settings-form">
          <div className="form-group">
            <label>Export File Name</label>
            <div className="file-name-input">
              <input type="text" placeholder="orders_%date_time%" />
              <button>Insert %date_time%</button>
            </div>
          </div>
          
          <div className="form-group">
            <label>Export File Format</label>
            <select>
              <option value="xlsx">XLSX</option>
              <option value="csv">CSV</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Orders Per Page</label>
            <div className="number-input">
              <button className="decrement">-</button>
              <input type="number" min="1" value="50" />
              <button className="increment">+</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}