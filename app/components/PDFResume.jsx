import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    fontFamily: 'Helvetica',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    border: '1pt solid #AAAAAA',
    borderRadius: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
    textTransform: 'uppercase',
    color: '#555555',
  },
  value: {
    fontSize: 12,
    marginBottom: 10,
    color: '#000000',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#888888',
    marginBottom: 10,
  },
  pattern: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
    opacity: 0.1,
  },
});

const PDFResume = ({ firstName, lastName, email, website, portfolio }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>CV</Text>
        <View style={styles.divider} />
        <Text style={styles.label}>First Name</Text>
        <Text style={styles.value}>{firstName}</Text>
        <Text style={styles.label}>Last Name</Text>
        <Text style={styles.value}>{lastName}</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{email}</Text>
        {website && (
          <>
            <Text style={styles.label}>Website</Text>
            <Text style={styles.value}>{website}</Text>
          </>
        )}
        {portfolio && (
          <>
            <Text style={styles.label}>Portfolio</Text>
            <Text style={styles.value}>{portfolio}</Text>
          </>
        )}
        <View style={styles.divider} />
      </View>
    </Page>
  </Document>
);

export default PDFResume;
